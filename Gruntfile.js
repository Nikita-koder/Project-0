module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-openui5");
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    livereload: false,
                    keepalive: true
}
            }
        },
    openui5_connect: {
            server: {
                options: {
                    appresources: "src",
                    resources: "C:/ui5/resources",
                    testresources: "C:/ui5/test-resources"
}
            }
        }
    });
    grunt.registerTask("serve", function () {
        grunt.task.run([
            "openui5_connect:server"
]);
});
};