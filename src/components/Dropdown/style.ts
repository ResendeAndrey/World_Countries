import styled from 'styled-components'

export const DropDownContainer = styled.div`
.dropdownContainer {
  display: flex;
  flex-direction: column;
  width: 100% !important;
}
.dropdownLabel {
  margin-bottom: 0.5rem !important;
}
.dropdownList {
  width: 100%;
  position: relative;
}

.dropdownPlaceholder {
  color: var(--font-color);
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  background: #fff;
}
.dropdownPlaceholder > div:last-child,
.dropdownPlaceholderSelected > div:last-child {
  display: flex;
  justify-content: flex-end;
}
.dropdownPlaceholderSelected {
  color: #444;
  font-size: 1.7rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
  background: #fff;
}
.listOption {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 20rem;
  height: auto;
  overflow-y: auto;
  position: absolute;
  top: 110%;
  z-index: 1;
  overflow-x: hidden;
}

.listOption button {
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
}
.listOption::-webkit-scrollbar {
  background-color: #d9d9d9 !important;
  width: 8px;
}

.listOption::-webkit-scrollbar-thumb {
  background-color: #003265 !important;
}
.listOption button:hover {
  background: #e9e9e9;
}
.dropdownLabel span {
  font-size: 14px;
  color: #444;
}
.requiredField::after {
  content: ' *';
}

`

