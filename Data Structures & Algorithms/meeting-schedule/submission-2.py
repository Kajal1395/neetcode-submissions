"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals = sorted(intervals, key=lambda x: x.start)

        if len(intervals) <= 1:
            return True
        print(intervals)
        curr = intervals[0]
        for i in range(1, len(intervals)):
            if curr.end > (intervals[i].start):
                return False
            else:
                curr = intervals[i]
        return True
