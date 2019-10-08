export const counter = (store, action) => {
    if (action.type === "INCREMENT") {
      return {
        count: store.count + 1
      };
    } else if (action.type === "DECREMENT") {
      return {
        count: store.count - 1
      };
    }
  
    return store || { count: 0 };
  };