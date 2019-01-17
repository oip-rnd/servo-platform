angular
  .module('app')
  .factory('editorService', editorService);

editorService.$inject = ['$window'];

function editorService($window) {
  var service = {
    getDefaultSettings: getDefaultSettings,
    applySettings: applySettings,
    newProject: newProject,
    openProject: openProject,
    closeProject: closeProject,
    exportProject: exportProject,
  };
  return service;

  function getDefaultSettings() {
    return $window.b3e.DEFAULT_SETTINGS;
  }

  function applySettings(settings) {
    $window.editor.applySettings(settings);
  }

  function newProject(projectName) {
    $window.editor.project.create(projectName);
  }

  function openProject(data, path, projectName) {
    $window.editor.project.open(data, projectName);
  }

  function closeProject() {
    $window.editor.project.close();
  }

  function exportProject() {
    return $window.editor.export.projectToData();
  }
}
