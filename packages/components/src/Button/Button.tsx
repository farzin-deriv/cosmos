import React, { ReactElement } from 'react';

type TProps = { onClick: VoidFunction; title: string };

const Button = ({ onClick, title }: TProps): ReactElement => <button onClick={onClick}>{title}</button>;

export default Button;
