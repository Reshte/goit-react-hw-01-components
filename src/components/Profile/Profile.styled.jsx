import styled from '@emotion/styled'

export const WrapperProfile = styled.div`
padding: 10px;
`
export const Description = styled.div`
padding: 50px;
display:flex;
flex-direction: column;
gap:20px;
border-radius: 10px 10px 0 0;
background-color: white;
padding: 40px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Img = styled.img`
width: 250px;
display:block;
border-radius: 50%;
margin: 0 auto;
`

export const Name = styled.p`
margin: 0 auto;
font-weight:bold;
`

export const Tag = styled.p`
margin: 0 auto;`

export const Location = styled.p`
margin: 0 auto;`

export const StatList = styled.ul`
padding: 0;
margin: 0;
display: flex;
align-items: center;
background-color:  #e9e9e9;
border-radius:  0 0 10px 10px;`

export const StatItem = styled.li`
width:200px;
display: flex;
flex-direction: column;
align-items: center;
gap:10px;
padding: 20px;
border-right: 1px solid black;

:last-child{
border-right: none;
};`


export const StatLabel = styled.span`
margin: 0 auto;`

export const StatQuantity = styled.span`
margin: 0 auto;
font-weight:bold;`