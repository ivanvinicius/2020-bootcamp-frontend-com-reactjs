import React from 'react';

/**
 * 1. Function Component do React
 * 2. A Função pode receber parâmetros como props e children
 *    2.1 props.nomeDaPropriedade
 *    2.2 clindren é proviniente da informação contida dentro do 
 *        componente <Header>Esse é meu children</Header>
 * 3. Quando temos mais de um elemento ou componente no React 
 *    devemos sempre usar o FRAGMENT (<></>) por volta
 * 4. Cada componente pode ter sua própria estilização e pode ser 
 *    usado em diversos lugares da aplicação
 */

export default function Header({ title }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
}