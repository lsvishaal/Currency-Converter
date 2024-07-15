import useCurrencyInfo from './hooks/useCurrencyInfo' 
import { useState } from 'react'
import InputBox from './components/index.js'

const App = () => {

  const[amount, setAmount] = useState(0)
  const[from, setFrom] = useState('usd')
  const[to, setTo] = useState('inr')
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    const amountInUSD = amount / currencyInfo[from]
    const convertedAmount = amountInUSD * currencyInfo[to]
    setConvertedAmount(convertedAmount)
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  return (
    <div className=' w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()

        }}>
          <div className='w-full mb-1'>
            <inputBox
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setFrom(currency)}
            onAmountChange={(amount)=> setAmount(amount)}

            />
          </div>

        </form>
        </div>
      </div>
      
    </div>
  )
}

export default App
