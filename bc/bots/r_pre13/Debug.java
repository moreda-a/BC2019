package bc19;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

public class Debug {

	private static ArrayList<String> logs;

	public static void sysout(String s) {
		logs.add(s);
	}

//	public static boolean write() {
//		Path file = Paths.get("wtest.txt");
//		try {
//			Files.write(file, logs, Charset.forName("UTF-8"));
//		} catch (IOException e) {
//			e.printStackTrace();
//			return false;
//		}
//		return true;
//	}
}
