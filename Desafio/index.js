class Cliente {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco;
      this.pedidos = [];
    }
  
    fazerPedido(restaurante, itens) {
      this.pedidos.push(new Pedido(this, restaurante, itens));
    }
  
    consultarPedidos() {
      return this.pedidos;
    }
  }
  
  class Restaurante {
    constructor(nome, menu) {
      this.nome = nome;
      this.menu = menu;
    }
  
    exibirMenu() {
      console.log(`Menu do restaurante ${this.nome}`);
      for (const [item, preco] of Object.entries(this.menu)) {
        console.log(`${item}: R$${preco}`);
      }
    }
  
    receberPedido(cliente, itens) {
      const pedido = new Pedido(cliente, this, itens);
      pedido.status = "pendente";
      return pedido;
    }
  }
  
  class Pedido {
    constructor(cliente, restaurante, itens) {
      this.cliente = cliente;
      this.restaurante = restaurante;
      this.itens = itens;
      this.status = "pendente";
      this.total = this.calcularTotal();
    }
  
    calcularTotal() {
      return Object.entries(this.itens).reduce((total, [item, quantidade]) => {
        return total + this.restaurante.menu[item] * quantidade;
      }, 0);
    }
  
    atualizarStatus(status) {
      this.status = status;
    }
  }
  
     
  const cliente1 = new Cliente("João", "Rua A, 123");
  const restaurante1 = new Restaurante("Restaurante A", {
    Pizza: 15,
    Hamburguer: 10,
    Salada: 8,
  });
  
  cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 });
  
  console.log("Menu do restaurante A");
  restaurante1.exibirMenu();
  
  console.log("Pedidos do cliente João");
  cliente1.consultarPedidos().forEach((pedido) => {
    console.log(`Total do pedido: R$${pedido.total}`);
  });
  
  const pedidoCliente1 = cliente1.consultarPedidos()[0];
  pedidoCliente1.atualizarStatus("em andamento");
  
  console.log(`Status do pedido: ${pedidoCliente1.status}`);
