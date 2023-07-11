const env = {
  local: {
    baseUrl: "http://localhost:3000", // Local backend URL during development
  },
  prod: {
    baseUrl: "https://chef-virtual.onrender.com/", // Backend URL in prod
  },
};

export default env.prod; // Change here the environment
