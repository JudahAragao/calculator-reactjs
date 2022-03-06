import * as S from './styles'

type Props = {
    children: Number | String,
    onClick: any
}

const Button = ({children, onClick}: Props) => {
    return (
        <S.Container onClick={() => onClick(children)}>
            {children}
        </S.Container>
    )
}

export default Button