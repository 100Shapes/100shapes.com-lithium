export default ngModule => {
    
    require('./main')(ngModule);
    require('./blog')(ngModule);
    require('./services')(ngModule);
    require('./home')(ngModule);
    require('./about')(ngModule);
    require('./landing')(ngModule);

}
