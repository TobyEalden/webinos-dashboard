/*******************************************************************************
 *  Code contributed to the webinos project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Copyright 2013 EPU-National Technical University of Athens
 * Author: Christos Botsikas, NTUA
 ******************************************************************************/
var path = require('path');
var dashboard = require('./dashboard');

dashboard.modules.add("explorer", "Explorer", path.join(__dirname, '../modules/dashboard-explorer/'));
dashboard.modules.add("people", "People", path.join(__dirname, '../modules/people/'));
//dashboard.modules.add("prompt", "Prompt", path.join(__dirname, '../modules/prompt/'), false);
//dashboard.modules.add("enrollment", "Enroll", path.join(__dirname, '../modules/enrollment/'));
//dashboard.modules.add("ui", "UI Tests", path.join(__dirname, '../modules/'));
dashboard.modules.add("dustjs-linkedin", "dust", path.join(__dirname, '../node_modules/'), false);

module.exports = {
    Service : require('./dashboard.rpc.service'),
    httpHandler : require('./dashboard.httpHandler'),
    open: dashboard.open,
    registerModule: dashboard.modules.add
};