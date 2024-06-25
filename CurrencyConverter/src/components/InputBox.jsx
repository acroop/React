import React, {useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className="",
}) {
    const amountInputId = useId();
    return ( 
        
        <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 inline-block mb-2'>
                    {label};
                </label>

                <input
                id={amountInputId}
                className='outline-none w-full bg-transparent py-1.5' 
                type="number" 
                placeholder='Amount' 
                disabled = {amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='flex flex-wrap w-1/2 justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select className='px-1 py-1 rounded-lg bg-gray-100 cursor-pointer outline-none'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange &&
                onCurrencyChange(Number(e.target.value))}
                disabled = {currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency}
                        value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

        </div>

     );
}

export default InputBox;