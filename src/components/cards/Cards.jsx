const Cards = () => {
    return (
        <StyledCards backgroundColor={backgroundColor}>
            <StyledEachCard>
                <StyledIcon src={icon}></StyledIcon>
                <StyledCardTitle color={color}>{cardTitle}</StyledCardTitle>
                <StyledCardSubtitle color={color}>{cardSubtitle}</StyledCardSubtitle>
                <StyledCardDescription color={color}>{cardDescription}</StyledCardDescription>
            </StyledEachCard>
            <
        </StyledCards>
    )
}