package com.example.demo.camel.processor;

import java.io.InputStream;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

import com.example.demo.utils.CamelProcessorUtils;
import com.example.demo.utils.FormatConversionUtil;

@Component("SaveinfoProcessor")
public class SaveinfoProcessor implements Processor {

	@Override
	public void process(Exchange exchange) throws Exception {
		System.out.println("<==============================SaveinfoProcessor================================>");
		InputStream body = null;
		body = exchange.getIn().getBody(InputStream.class);
		String data = CamelProcessorUtils.setHttpBody(body);
		String rootName = "contactDetails";
		String map = FormatConversionUtil.jsonToXML(data, rootName);
		exchange.getOut().setHeader("content-type", "application/json");
		System.out.println(map + "=======");
		exchange.getOut().setBody(map);

	}

}
