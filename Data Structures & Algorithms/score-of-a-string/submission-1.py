class Solution:
    def scoreOfString(self, s: str) -> int:
        sum=0
        for i in range(len(s)):
            if i > 0:
                sum += abs(ord(s[i]) - ord(s[i - 1]))
        return sum
