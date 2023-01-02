import styled from '@emotion/styled'

export const Section = styled.section`
background-color: white;
border-radius: 5px;
width: 800px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
margin: 0 auto;
padding:0;
font-size: 20px;
color: #84909d;
text-transform: uppercase;
`

export const List = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;
`

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
color:orange;
`

export const Label = styled.span`
color:white;
`

export const Percentage = styled.span`
color:white;
fontSize: 30px;
`