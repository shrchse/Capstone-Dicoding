/* eslint-disable max-len */
const createPostTemplate = (posts) => `
    <div class="card mb-3 cp-card" style="max-width: 95%;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${posts.category}.webp" class="card-image" alt="img-event">
        </div>
        <div class="col-md-8">
        <div class="card-body no-overflow">
            <h5 class="card-title" data-id='${posts.title}' id="p-title">${posts.title}</h5>
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

const createPostTemplateFeed = (posts) => `
    <div class="card mb-3 cp-card" style="max-width: 95%;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${posts.category}.webp" class="card-image" alt="img-event">
        </div>
        <div class="col-md-8">
        <div class="card-body no-overflow">
            <h5 class="card-title" data-id='${posts.title}' id="p-title">${posts.title}</h5>
            <p class="card-text">${posts.location} - ${posts.category} </p>
            <p class="card-text no-overflow">${posts.description}</p>
            <a href="${posts.additional}" class="card-text no-overflow">${posts.additional}</a>
            <p class="card-text"><small class="text-muted">${posts.timestamp.toDate()}</small></p>
        </div>
        </div>
    </div>
    </div>`;

const formCreate = () => `
    <div class="card form-card">
    <form class="add">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="title" placeholder="Title" required>
        <label for="floatingInput">Title</label>
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="additional" name="additional" placeholder="Additional Link" required>
        <label for="floatingInput">Additional Link</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="location" name="location" placeholder="Location" required>
        <label for="floatingInput">Location</label>
    </div>
    <select class="form-select" id="category" name="category" required>
        <option selected disabled value="">Category</option>
        <option value="Community Event">Community Event</option>
        <option value="Volunteer">Volunteer</option>
        <option value="Campaign">Campaign</option>
        <option value="Other">Other</option>
    </select>
    <button type="submit" value="submit" class="btn btn-success" id="submit">Submit</button>
    </form>
    </div>
    <div id="btn-target">
        <a class="btn btn-danger" id="close">Close</a>
    </div>
`;

const formCreateEdit = (post) => `
    <div class="card form-card">
    <form class="add">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="title" value="${post.title}" placeholder="Title">
        <label for="floatingInput">Title</label>
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3">${post.description}</textarea>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="additional" value="${post.additional}" placeholder="Additional Link">
        <label for="floatingInput">Additional Link</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="location" value="${post.location}" placeholder="Location">
        <label for="floatingInput">Location</label>
    </div>
    <select class="form-select" id="category">
        <option selected>${post.category}</option>
        <option value="Community Event">Community Event</option>
        <option value="Volunteer">Volunteer</option>
        <option value="Campaign">Campaign</option>
        <option value="Other">Other</option>
    </select>
    <button class="btn btn-success" id="submit">Submit</button>
    </form>
    </div>
    <div id="btn-target">
        <a class="btn btn-danger" id="close">Close</a>
    </div>
`;

export {createPostTemplate, createPostTemplateFeed, formCreate, formCreateEdit};
