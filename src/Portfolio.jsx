import React, { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase.js'
import auth from './auth.jsx'
import { useParams } from 'react-router-dom'

auth()

function Portfolio() {
  const [portfolio, setPortfolio] = useState(null)
  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchPortfolio = async () => {
      const docRef = doc(db, 'portfolios', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        let temp = {}
        for (let i = 0; i < docSnap.data()[id].length; i++) {
          temp = { ...temp, ...docSnap.data()[id][i] }
          setPortfolio(temp)
        }
      } else {
        setPortfolio(null)
        alert('No such document!')
      }
    }
    fetchPortfolio()
  }, [id])

  if (!portfolio) {
    return <div>Loading...</div>
  }

  const { ...allFields } = portfolio
  console.log(portfolio)

  return (
    <div>
      <ul>
        {Object.entries(allFields).map(([key, value]) => (
          <li key={key}>
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
