anErrorHasOccured("An error occurred when calling the API");
function anErrorHasOccured(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}