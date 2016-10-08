module.exports = function(api) {
  return {
    projects:           `${api}/projects`,
    project:            `${api}/project/<project_slug>`,

    resources:          `${api}/project/<project_slug>/resources`,
    resource:           `${api}/project/<project_slug>/resource/<resource_slug>`,
    resourceString:     `${api}/project/<project_slug>/resource/<resource_slug>/source/<string_hash>`,

    languages:          `${api}/project/<project_slug>/languages`,
    language:           `${api}/project/<project_slug>/language/<language_code>`,

    languagesInfo:      `${api}/languages`,
    languageInfo:       `${api}/language/<language_code>`,

    translation:        `${api}/project/<project_slug>/resource/<resource_slug>/translation/<language_code>`,
    translationStrings: `${api}/project/<project_slug>/resource/<resource_slug>/translation/<language_code>/strings`,
    translationString:  `${api}/project/<project_slug>/resource/<resource_slug>/translation/<language_code>/string/<string_hash>`,

    stats: `${api}/project/<project_slug>/resource/<resource_slug>/stats`,
    stat: `${api}/project/<project_slug>/resource/<resource_slug>/stats/<lang_code>`,
  }
}
