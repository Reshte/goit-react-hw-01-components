import styled from '@emotion/styled'

export const Item = styled.li`
background-color: white;
width:800px;
border-radius:5px;
display:flex;
align-items: center;
gap: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Onlaine = styled.span`
border-radius:50%;
width: 25px;
height: 25px;
margin-left: 20px;
margin-right: 20px;

background-color:${props =>{return props.isOnline ? "green" : "red" }}
`

export const Img = styled.img`
display:block;
`

export const Name = styled.p`
`