## Opção Desafio 1

**Tema do Exercício: Sistema de Entrega (Delivery) usando Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um sistema simples de entrega (delivery) que consistirá em clientes, restaurantes e pedidos.
2. Cada cliente pode fazer pedidos em um ou mais restaurantes.
3. Cada restaurante possui um menu com itens e preços.
4. Cada pedido contém itens do menu, a quantidade desejada e o cliente que fez o pedido.
5. O sistema deve calcular o valor total de cada pedido e rastrear o status da entrega (pendente, em andamento, entregue).
6. Implementar métodos para exibir informações relevantes, como o menu do restaurante, os pedidos do cliente e o status da entrega.

**Classes:**

1. `Cliente`: Representa um cliente. Atributos: `nome`, `endereço`.

- Métodos: `fazerPedido(restaurant, items)`, `consultarPedidos()`.

2. `Restaurante`: Representa um restaurante. Atributos: `nome`, `menu`.

- Métodos: `exibirMenu()`, `receberPedido(client, items)`.

3. `Pedido`: Representa um pedido feito por um cliente. Atributos: `cliente`, `restaurante`, `itens`, `status` (pendente, em andamento, entregue), `total`.

- Métodos: `calcularTotal()`, `atualizarStatus(status)`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Cliente e Restaurante
const cliente1 = new Cliente("João", "Rua A, 123");
const restaurante1 = new Restaurante("Restaurante A", {
  Pizza: 15,
  Hamburguer: 10,
  Salada: 8,
});

// Cliente faz um pedido
cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 });

// Restaurante recebe o pedido
restaurante1.receberPedido(cliente1, { Pizza: 2, Hamburguer: 1 });

// Exibir menu do restaurante
restaurante1.exibirMenu();

// Consultar pedidos do cliente
cliente1.consultarPedidos();

// Calcular total do pedido
const pedidoCliente1 = cliente1.consultarPedidos()[0];
console.log(`Total do pedido: R${pedidoCliente1.calcularTotal()}`);

// Atualizar status do pedido
pedidoCliente1.atualizarStatus("em andamento");

// Exibir status do pedido
console.log(`Status do pedido: ${pedidoCliente1.status}`);
```

---
