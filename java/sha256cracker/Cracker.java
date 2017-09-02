package sha256cracker;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashSet;
import java.util.Set;

/**
 Original problem:
 This kata aims to show the vulnerabilities of hashing functions for short messages.

 When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters that make the expected value, but in alphabetical order.

 The returned value is less than 10 characters long. Return nil for Ruby and Crystal, None for Python, null for Java when the hash cannot be cracked with the given characters.

 Example:

 Example arguments: '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'cdeo'
 Correct output: 'code'
 */
class Cracker {
    static MessageDigest md;
    static Set<String> permutations = new HashSet<>();

    static {
        try {
            md = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    static String crackSha256(String hash, String chars) {
        permuteChars("", chars);

        for (String possible : permutations) {
            String tryHash = getSha256(possible);

            if (hash.equals(tryHash)) {
                permutations.clear();
                return possible;
            }
        }

        permutations.clear();

        return null;
    }

    static void permuteChars(String prefix, String chars) {
        int length = chars.length();

        if (length == 0) {
            permutations.add(prefix);
        }

        for (int i = 0; i < length; i++) {
            permuteChars(prefix + chars.charAt(i), chars.substring(0, i) + chars.substring(i + 1, length));
        }
    }

    private static String getSha256(String message) {
        try {
            byte[] bytes = message.getBytes("UTF-8");

            md.update(bytes);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        byte[] digest = md.digest();

        return String.format("%064x", new BigInteger(1, digest));
    }
}