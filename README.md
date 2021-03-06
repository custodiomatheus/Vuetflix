# Vuetflix
Vuetlix is a Netflix clone using my personal API (https://github.com/custodiomatheus/Nodeflix) and TmdbAPI (https://www.themoviedb.org/documentation/api), in addition to registration and login part, it is possible to link many users to a account, to be able to add a favorite and view the series and movies watched (unfortunately it is not possible to actually watch it, but a very creative solution is being planned), it is also possible to search for some specific content.

## How run the project

### Requests
Have the NodeJs version ≥ 10.15 installed on your computer.
With the NodeJs installed, follow the steps below ;)

1. Clone the repository, you can dowload the .zip or use the follow command
```bash
git clone https://github.com/custodiomatheus/Vuetflix.git
```
2. Access the project folder
```bash
cd Vuetflix
```
3. Run the command below to install all project dependencies
```bash
npm install
```
PS: this can take a few seconds....

4. Run the command below to initialize the project
```bash
npm start
```
5. Last but not least, open some browser in the follow url
http://localhost:8080

![Pagina inicial](./index.png)

## Technologies
* axios
* dotenv
* vue
* vue-class-component
* vue-router
* vuex
* vuex-persist
* typescript

