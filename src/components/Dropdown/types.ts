export interface IDropdown {
  options: IOptions[]
  label?: string
  initialValue?: string | number | undefined
  onChange: (value: string | number | undefined) => void
  placeholder: string
  required?: boolean
}

export interface IOptions {
  value: string | number | undefined
  text: string | number | undefined
}
