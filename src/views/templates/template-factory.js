/* eslint-disable max-len */
const createPostTemplate = (posts) => `
        <div class="card mb-3 cp-card" style="max-width: 95%;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="Screenshot (732).png" class="card-image" alt="img-event">
        </div>
        <div class="col-md-8">
        <div class="card-body no-overflow">
            <h5 class="card-title" id="p-title">${posts.title}</h5>
            <p class="card-text">${posts.location} - ${posts.category} </p>
            <p class="card-text no-overflow">${posts.description}</p>
            <a href="${posts.additional}" class="card-text no-overflow">${posts.additional}</a>
            <p class="card-text"><small class="text-muted">${posts.timestamp.toDate()}</small></p>
            <div class="post-container-btn">
                <button data-id='${posts.id}' class="post-btn btn btn-danger" id="delete">Delete</button>
                <button data-id='${posts.id}' class="post-btn btn btn-warning" id="update">Edit</button>
            </div>
            <div class="editGo"></div>
        </div>
        </div>
    </div>
    </div>`;

export {createPostTemplate};
