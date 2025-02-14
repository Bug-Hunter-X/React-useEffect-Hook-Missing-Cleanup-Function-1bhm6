# React useEffect Hook Missing Cleanup Function

This example demonstrates a common mistake in using React's useEffect hook: forgetting to include a cleanup function to prevent memory leaks.  The `setInterval` function is started, but never stopped, leading to an ever-increasing number of intervals if the component is unmounted and remounted.

The solution shows how to properly implement cleanup with the return statement, ensuring that the interval is cleared before the component is unmounted.