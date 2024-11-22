import { useState, useEffect } from 'react'
import useLoading from './useLoading'

const useGetAllCourses = () => {
  const { isLoading, setIsLoading } = useLoading()

  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5132/courses') // Коректний URL для отримання курсів
        if (!response.ok) {
          throw new Error('Failed to fetch courses')
        }
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { isLoading, data, setData }
}

export default useGetAllCourses
