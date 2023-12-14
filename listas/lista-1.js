class Hotel {
    constructor(nome) {
        this.nome = nome;
        this.quartos = [];
        this.reservas = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    consultarDisponibilidade(dataInicial, dataFinal) {
        return this.quartos.filter(quarto => quarto.estaDisponivel(dataInicial, dataFinal));
    }

    fazerReserva(hospede, quarto, dataInicial, dataFinal) {
        if (quarto.estaDisponivel(dataInicial, dataFinal)) {
            const reserva = new Reserva(hospede, quarto, dataInicial, dataFinal);
            this.reservas.push(reserva);
            quarto.adicionarReserva(reserva);
            return reserva;
        } else {
            console.log("Quarto não disponível para o período solicitado.");
            return null;
        }
    }

    exibirInformacoes() {
        console.log(`Hotel: ${this.nome}`);
        console.log("Quartos disponíveis:");
        this.quartos.forEach(quarto => {
            console.log(`Número: ${quarto.numero}, Tipo: ${quarto.tipo}, Disponível: ${quarto.disponivel}`);
        });
        console.log("Reservas:");
        this.reservas.forEach(reserva => {
            console.log(`Hóspede: ${reserva.hospede.nome}, Quarto: ${reserva.quarto.numero}, Data: ${reserva.dataInicial} a ${reserva.dataFinal}`);
        });
    }
}

class Quarto {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponivel = true;
        this.reservas = [];
    }

    estaDisponivel(dataInicial, dataFinal) {
        return this.disponivel && this.reservas.every(reserva => !reserva.sobreposto(dataInicial, dataFinal));
    }

    adicionarReserva(reserva) {
        this.reservas.push(reserva);
        this.disponivel = false;
    }
}

class Hospede {
    constructor(nome) {
        this.nome = nome;
    }
}

class Reserva {
    constructor(hospede, quarto, dataInicial, dataFinal) {
        this.hospede = hospede;
        this.quarto = quarto;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
    }

    sobreposto(dataInicial, dataFinal) {
        return (
            (dataInicial >= this.dataInicial && dataInicial <= this.dataFinal) ||
            (dataFinal >= this.dataInicial && dataFinal <= this.dataFinal) ||
            (this.dataInicial >= dataInicial && this.dataFinal <= dataFinal)
        );
    }
}

// Exemplo de Uso
const hotel = new Hotel("Hotel ABC");

const quarto1 = new Quarto(101, "simples");
const quarto2 = new Quarto(102, "duplo");
const quarto3 = new Quarto(103, "suíte");

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(quarto3);

const hospede1 = new Hospede("João");
const hospede2 = new Hospede("Maria");

const reserva1 = hotel.fazerReserva(hospede1, quarto1, new Date("2023-01-01"), new Date("2023-01-05"));
const reserva2 = hotel.fazerReserva(hospede2, quarto2, new Date("2023-01-03"), new Date("2023-01-07"));

hotel.exibirInformacoes();
