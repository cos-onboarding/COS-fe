package com.example.demo.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;
import net.sf.json.xml.XMLSerializer;

public class FormatConversionUtil {
	/**
	 * 
	 * @param data
	 * @param rootName：
	 *            xml中的节点
	 * @return
	 */
	public static String jsonToXML(String data, String rootName) {
		System.out.println(data + "=============");
		JSONObject json = JSONObject.fromObject(data);
		String username = json.getString("username");
		String password = json.getString("password");
		String id = json.getString("id");
		String ContactTelCompany = json.getString("ContactTelCompany");
		XMLSerializer xmlSer = new XMLSerializer();
		xmlSer.setRootName(rootName);
		xmlSer.setTypeHintsEnabled(false);
		String xml = xmlSer.write(json);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = df.format(new Date());
		Map<String, String> map = new HashMap<String, String>();
		map.put("application", id);
		map.put("baseInfo", xml);
		map.put("date", date);
		map.put("company", ContactTelCompany);
		map.put("status", "0");
		map.put("username", username);
		map.put("password", password);
		System.out.println("json--->xml \n" + xml);

		JSONObject jsonObject = JSONObject.fromObject(map);
		System.out.println("输出的结果是：" + jsonObject);
		// 3、将json对象转化为json字符串
		String result = jsonObject.toString();
		System.out.println(result + "=====================");

		return result;

	}
}
