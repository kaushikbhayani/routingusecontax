import React from "react";

const LocalStorage = {
  setItem: async function (key, data) {
    try {
      localStorage.setItem(key, data);
    } catch (error) {
      console.log("error", error);
    }
  },
  getItem: async function (key) {
    try {
      const responce = await localStorage.getItem(key);

      return responce;
    } catch (error) {
      console.log("error", error);
    }
  },

  removeItem: async function (key) {
    try {
      await localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log("error", error);
    }
  },
};

export default LocalStorage;
