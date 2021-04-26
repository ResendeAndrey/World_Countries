import React, { useEffect, useRef, useState } from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { IDropdown, IOptions } from './types'
import { DropDownContainer } from './style'


const Dropdown: React.FC<IDropdown> = ({
  options,
  label,
  initialValue,
  onChange,
  placeholder,
  required,
}) => {
  const [valueSelected, setValueSelected] = useState('') as any
  const [toggleList, setToggleList] = useState(false)
  const wrapperRef = useRef(null) as any
  useEffect(() => {
    if (toggleList) {
      window.addEventListener('mousedown', (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event?.target)) {
          setToggleList(!toggleList)
        }
      })
    }
  }, [toggleList, wrapperRef])

  return (
    <DropDownContainer ref={wrapperRef} >
      <div className="dropdownLabel">
        <span className={required ? `requiredField` : ''}>{label}</span>
      </div>
      <div className="dropdownList">
        <button
          type="button"
          onClick={() => setToggleList(!toggleList)}
          className={
            valueSelected === '' && !initialValue
              ? `dropdownPlaceholder`
              : `dropdownPlaceholderSelected`
          }
        >
          {initialValue ? (
            <>
              <div>{valueSelected === '' ? initialValue : valueSelected}</div>
              <div>{toggleList ? <ArrowUpward /> : <ArrowDownward />}</div>
            </>
          ) : (
            <>
              <div>{valueSelected === '' ? placeholder : valueSelected}</div>
              <div>{toggleList ? <ArrowUpward /> : <ArrowDownward />}</div>
            </>
          )}
        </button>
        {toggleList && (
          <div role="list" className="listOption">
            {options.map((option: IOptions) => (
              <button
                type="button"
                key={option.value}
                onClick={() => {
                  setValueSelected(option.text)
                  onChange(option.value)
                  setToggleList(!toggleList)
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </DropDownContainer>
  )
}

export default Dropdown
