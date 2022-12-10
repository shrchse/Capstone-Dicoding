/* eslint-disable max-len */
const createPostTemplate = (posts) => `
    <div class="card mb-3 cp-card" style="max-width: 100%;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${posts.category}.webp" class="card-image" alt="img-event">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title" data-id='${posts.title}' id="p-title">${posts.title}</h5>
            <p class="card-text">${posts.location} - ${posts.category} </p>
            <p class="card-text">${posts.description}</p>
            <a href="${posts.additional}" class="card-text">${posts.additional}</a>
            <p class="card-text">
                <small class="text-muted">Posted by ${posts.author}</small> <br>
                <small class="text-muted">${posts.timestamp.toDate()}</small>
            </p>
            <div class="post-container-btn">
                <button data-id='${posts.id}' class="post-btn btn btn-danger" id="delete">Delete</button>
                <button onClick="document.getElementById('formRef').scrollIntoView();" data-id='${posts.id}' class="post-btn btn btn-warning" id="update">Edit</button>
            </div>
            <div class="editGo"></div>
        </div>
        </div>
    </div>
    </div>`;

const createPostTemplateFeed = (posts) => `
    <div class="card mb-3 cp-card">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${posts.category}.webp" class="card-image" alt="img-event">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title" data-id='${posts.title}' id="p-title">${posts.title}</h5>
            <p class="card-text">${posts.location} - ${posts.category} </p>
            <p class="card-text">${posts.description}</p>
            <a href="${posts.additional}" class="card-text">${posts.additional}</a>
            <p class="card-text">
                <small class="text-muted">Posted by ${posts.author}</small> <br>
                <small class="text-muted">${posts.timestamp.toDate()}</small>
            </p>
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

const createRightPostTemplate = (post) => {
  `<div class="card" style="width: 95%;">
    <img src="Volunteer.webp" class="card-img-top" alt="...">
    <div class="card-body">
            <h5 class="card-title">IT Matsuri 2022</h5>
            <p class="card-text">Hello guys, jumpa lagi bersama kami, teman-teman dari HMTI 2022
                Kali ini mau ngabarin bro dan sis sekalian, kalo galama lagi, kita bakal ngadain IT Matsuri
            </p>
            <a href="#" class="btn btn-primary">Selengkapnya</a>
        </div>
    </div>
  </div>`;
};

export {createPostTemplate, createPostTemplateFeed, formCreate, formCreateEdit, createRightPostTemplate};
