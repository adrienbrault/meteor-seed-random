Package.describe({
    summary: "Generate random numbers with a seed, useful for reproducible tests"
});

Npm.depends({"seed-random": "1.0.1"});

Package.on_use(function (api) {
    api.add_files("seed-random.js", "server");
});
