package sha256cracker;

public class CrackerTest {
    public static void main(String[] args) {
        assertEquals("GoOutside", "b8c49d81cb795985c007d78379e98613a4dfc824381be472238dbd2f974e37ae", "deGioOstu");
        assertEquals(null, "f58262c8005bb64b8f99ec6083faf050c502d099d9929ae37ffed2fe1bb954fb", "abc");
    }

    private static void assertEquals(String original, String hash, String chars) {
        String result = Cracker.crackSha256(hash, chars);

        // No answer
        if (original == null && result == null) {
            System.out.println("Success! Got null");
            return;
        }

        if (original.equals(result)) {
            System.out.println("Success! Got " + result);
            return;
        }

        throw new AssertionError("Expected " + original + ", got " + result + " instead");
    }
}
