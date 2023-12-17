# Como rodar:
    `npm install`
    `npm start`

# Como adicionar novas queries de teste
Copie os modelos existentes
 - useUsers: exemplo concreto
 - useAnything: exemplo generico

# Como funciona a arquitetura e como desenvolver:

O primeiro passo é criar uma nova branch a partir da main.

O codigo html chama hooks para receber dados externos à aplicação. O hook por sua vez usa a biblioteca de requests que preferir. Desde que ele retorne um objeto {data, isLoading, error} tudo bem.

Podemos criar um novo hook no mesmo repositorio, de tal forma que a nova implementação acione o mesmo endpoint do backend, mas usando uma forma de request diferente. Por exemplo, removendo o useQuery do rect query de dentro do hook e colocando uma chamada direta para o fetch do javascript. Assim fazemos a troca de uma lib pra outra para compararmos.

Ja a diversidade dos testes pode ser obtida adicionando mais hook. Assim variando o payload e os tamanhos de response que devolvemos no backend.

Por hora, a unica medição de performance que está sendo feita é a de quanto tempo leva a execução do hook, ou seja, quanto tempo ele leva para receber o chamado, executar o request da maneira desejada e então retornar.

Nota: no nosso caso, o useQuery do react query também depende da implementação do request para api usando o fetch. Então substituir o react quey pelo fetch fica ainda mais simples. Basta remover a parte relativa a essa lib e fazer tudo usando a funçaão de chamada de api independentemente.