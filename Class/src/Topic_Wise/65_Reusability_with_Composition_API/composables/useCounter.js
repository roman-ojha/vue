// in this file we will write the function that can be called in every component where we need a counter functionality
import { ref } from "vue";

function useCounter(initialCount = 0, stepSize = 1) {
  // here because of Composition API now we can get the dynamic value from component that is using the hook as parameter
  // and also you can pass the default value
  const count = ref(initialCount);
  function incrementCount() {
    count.value += stepSize;
  }

  //   to user this functionality we have to return 'count' reference and 'incrementCount' method
  return {
    count,
    incrementCount,
  };
}

export default useCounter;
