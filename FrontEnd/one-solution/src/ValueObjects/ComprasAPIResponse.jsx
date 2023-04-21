/**
 * Exemplo de resposta de um microsserviço com informações
 * de compras realizadas. Ele possui campos texto indicando
 * várias informações da compra e um campo de status
 * (0 = compra não realizada; 1 = compra realizada;
 * 2 = mercadoria enviada; 3 = mercadoria recebida)
 */
const ComprasAPIResponse = {
    "id": 1358,
    "codigo": "4TR3U510K1",
    "infoPagto": "Data do pagamento: 6 de abril de 2023\r\nValor do pagamento: R$150,00\r\nNome do destinatário: XYZ Store\r\nDescrição: “Definitivamente não é uma bomba” by Balenciaga\r\nMétodo de pagamento: Cartão de crédito\r\nNúmero do cartão de crédito: **** **** **** 1234\r\nNome do titular do cartão: Raze\r\nEndereço de cobrança: Rua das Flores, 123, Bairro Jardim, Cidade, Estado, CEP 12345-678\r\nE-mail de confirmação do pagamento enviado para: raze@gmail.com\r\nStatus do pagamento: Aprovado\r\nReferência do pagamento: #4TR3U510K1\r\nComprovante de pagamento disponível em: www.comprv.com/4TR3U510K1",
    "infoProd": "“Definitivamente não é uma bomba” by Balenciaga (www.sitedecompra.com/dsg43a68sdf4g65s)",
    "infoCompra": "Compra realizada em ambiente seguro certificado com:\r\n3S (Serviço Super-Seguro)\r\nSSL+ (Super Sayajin Lock Plus)",
    "statusCompra": 3
}


export { ComprasAPIResponse };