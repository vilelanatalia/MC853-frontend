
const serviceUrl = "http://localhost:3001/"; // Replace with your actual URL
const iterations = 100; // Change to desired number of iterations

// Fetch API implementation
async function fetchBenchmark() {
    const startTime = performance.now();
    for (let i = 0; i < iterations; i++) {
        const response = await fetch(serviceUrl);
        const data = await response.json();
    }
    const endTime = performance.now();
    return endTime - startTime;
}

// React Query implementation (requires react-query package)
import { useQuery } from "react-query";

function QueryBenchmark() {
    const { data, isLoading, error } = useQuery(["data"], async () => {
        const response = await fetch(serviceUrl);
        return response.json();
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <p>{data.length} iterations completed</p>;
}

// Run benchmarks and compare results
(async () => {
    const fetchTime = await fetchBenchmark();
    console.log(`Fetch API: ${fetchTime.toFixed(3)}ms`);

    const reactQueryComponent = <QueryBenchmark />;
    React.render(reactQueryComponent, document.getElementById("root"));

    // Wait for React Query to fetch data and re-render
    await new Promise((resolve) => setTimeout(resolve, 200));

    console.log(`React Query: ${reactQueryComponent._reactRootContainer._instance.stateNode.queryCache.elapsedTime.toFixed(3)}ms`);
})();
