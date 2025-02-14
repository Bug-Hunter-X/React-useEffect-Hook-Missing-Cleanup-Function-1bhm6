```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning because it's missing a return function to cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```