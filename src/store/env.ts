import { LOCAL_DB_NAME, LOCAL_DB_USERNAME, LOCAL_DB_PASSWORD } from "@/js/env";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useEnvStore = defineStore("env", () => {
  const env = ref({});

  const fetchEnv = () => {
    // get env from rust later for security
    env.value = loadDefaults();
  };
  function loadDefaults() {
    return {
      LOCAL_DB_NAME,
      LOCAL_DB_USERNAME,
      LOCAL_DB_PASSWORD,
    };
  }

  return { env, fetchEnv };
});
