import styled from '@emotion/styled'

export const Table = styled.table`
width:800px;
background-color: white;
border-radius: 5px;`

export const TableHead = styled.thead`
background-color: #80A6FF;
color:white;
height:70px;
`
export const TableString = styled.tr`
background-color:${props =>{return( props.number % 2? 'white':'#e9e9e9' )}}
`

export const TableBody = styled.tbody`   
 text-align: center;
 `

export const TableColom = styled.td`
padding: 10px;
border-right: 1px solid grey;
:last-child{
border-right:none;
};` 