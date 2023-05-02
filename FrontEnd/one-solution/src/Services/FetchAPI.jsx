/**
 * Este é o serviço de exemplo de como seriam recuperadas
 * as informações dos microsserviços.
 */

/**
 * URL da API que seria usada para recuperar tickets
 */
const API = 'http://127.0.0.1:8080/api/v1/tickets';

/**
 * Função de retorno de todos os itens da API
 * @returns JSON com todos os itens da API
 */
async function GetTickets() 
{
    try 
    {
        const response = await fetch(API)
            .then((response) => response.json())

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Pesquisa de itens por ID
 * @param {int} id ID do item pesquisado
 * @returns JSON com o item pesquisado
 */
async function GetTicketById(id) 
{
    try 
    {
        const response = await fetch(API + '/' + id)
            .then((response) => response.json())

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

export { GetTickets, GetTicketById }
