const BASE_URL = '/api/games'


export async function addGame(gameData){
    return sendRequest(BASE_URL, 'POST', gameData)
}