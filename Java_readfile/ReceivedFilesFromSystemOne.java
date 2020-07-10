import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class ReceivedFilesFromSystemOne {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
        readFile(args[1]);
    }

    public static void readFile(String readFile){
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(
                new FileInputStream(readFile)));
            String ln;
            while ((ln = br.readLine()) !=null) {
                try {
                    String[] cols = ln.split("\t");
                    System.out.println(cols);
                } catch (Exception e) {
                    e.printStackTrace();
                    System.out.println("NG[" + ln + "]");
                }
            }
            return;
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}