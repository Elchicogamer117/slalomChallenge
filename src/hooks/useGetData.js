import React, { useEffect, useState } from 'react'
import { readFileSync } from "fs";
// const fs = require("fs")

const useGetData = (API) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async() => {
      const rawdata = readFileSync(API)
      setData(JSON.parse(rawdata))
    }
    getData()
  },[])
  return data
}

export default useGetData