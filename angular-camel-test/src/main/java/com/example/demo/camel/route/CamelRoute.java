package com.example.demo.camel.route;

import java.io.InputStream;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import com.example.demo.camel.processor.LoginProcessor;
import com.example.demo.camel.processor.RegistryProcessor;
import com.example.demo.camel.processor.SaveinfoProcessor;
import com.example.demo.utils.CamelProcessorUtils;

@Component
@PropertySource({"classpath:config/mule.properties"})
public class CamelRoute extends RouteBuilder {
	
	@Value("${user.login.url}")
	private String loginUrl;
	
	@Value("${user.registry.url}")
	private String registryUrl;
	
	@Value("${username.check.url}")
	private String usernameCheckUrl;
	
	@Value("${applications.overview.url}")
	private String appsOverviewUrl;
	
	@Value("${application.basicinfo.url}")
	private String basicinfoUrl;
	
	@Override
	public void configure() throws Exception {
		restConfiguration()
		  .contextPath("/camel") 
		  .port("8080")
		  .enableCORS(true)
		  .apiContextPath("/api-doc")
		  .apiProperty("api.title", "Camel REST API")
		  .apiProperty("api.version", "v1")
		  .apiContextRouteId("doc-api")
		  .component("servlet");
		
		rest("/api/")
		  .id("login-route")
		  .consumes("application/json")
		  .post("/login")
		  .to("direct:loginService");
		from("direct:loginService").process(new LoginProcessor()).to(loginUrl);
		
		rest("/api/")
		  .id("registry-route")
		  .consumes("application/json")
		  .post("/registry")
		  .to("direct:registryService");
		from("direct:registryService").process(new RegistryProcessor()).to(registryUrl);
		
		//保存basicinfo
		rest("/api/")
		  .id("basicinfo-route")
		  .consumes("application/json")
		  .post("/basicinfo")
		  .to("direct:basicinfoService");
		from("direct:basicinfoService").process(new SaveinfoProcessor()).to(basicinfoUrl);
//		from("direct:basicinfoService").process(new Processor() {
//			   
//				@Override
//				public void process(Exchange exchange) throws Exception {
//					InputStream body = null;
//					body = exchange.getIn().getBody(InputStream.class);
//					String data = CamelProcessorUtils.setHttpBody(body);
//			        exchange.getOut().setHeader("content-type", "application/xml");
//			        exchange.getOut().setBody(data);
//				}
//			  }).to(basicinfoUrl);
	
		
		rest("/api/")
		  .id("usrcheck-route")
		  .consumes("application/json")	
		  .post("/usrcheck")
		  .to("direct:usrcheckService");
		from("direct:usrcheckService").process(new Processor() {
		   
			@Override
			public void process(Exchange exchange) throws Exception {
				InputStream body = null;
				body = exchange.getIn().getBody(InputStream.class);
				String data = CamelProcessorUtils.setHttpBody(body);
		        exchange.getOut().setHeader("content-type", "application/json");
		        exchange.getOut().setBody(data);
			}
		  }).to(usernameCheckUrl);
		
		rest("/api/")
		  .id("apps-route")
		  .consumes("application/json")
		  .post("/apps")
		  .to("direct:appsService");
		from("direct:appsService").process(new Processor() {
			
			@Override
			public void process(Exchange exchange) throws Exception {
				InputStream body = null;
				body = exchange.getIn().getBody(InputStream.class);
				String data = CamelProcessorUtils.setHttpBody(body);
		        exchange.getOut().setHeader("content-type", "application/json");
		        exchange.getOut().setBody(data);
			}
		  }).to(appsOverviewUrl);
	}

}
