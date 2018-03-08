fetch("https://api.github.com/users/jamiebort")
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function displayGitHubInfo() {

          let data = JSON.parse(this.responseText);

          document.getElementById('name').innerHTML = `Name: ` + data.name;

          document.getElementById('url').innerHTML = `URL: ` + data.url;

          document.getElementById('email').innerHTML = `Email: ` + data.email;

          document.getElementById('company').innerHTML = `Company: ` + data.company;

          document.getElementById('blog').innerHTML = `Website: ` + data.blog;

          document.getElementById('bio').innerHTML = data.bio;
        });

}
)
.catch(function(err) {
  console.log("Fetch Error :-S", err);
});
