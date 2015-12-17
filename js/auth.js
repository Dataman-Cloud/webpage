$(document).ready(function(){
    var verifyCode;

    var options = {
        errors: {
            username: '邮箱地址格式错误',
            passwordrule: '密码可包含数字、标点、字母，至少要包含一位大写字母。',
            passwordtips: '密码可包含数字、标点、字母，至少要包含一位大写字母且长度为8~16位',
            passwordmin: '密码长度不少于8位',
            phonenumber: '手机号码格式错误',
            need: ' '
        },
        custom: {
            'username': function($el) {
                var content = $el.val().trim();
                if (content === '') {
                    return true;
                } else {
                    var re = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    return re.test(content);
                }
            },
            'passwordrule': function($el) {
                var content = $el.val();
                var minLength = $el.data('passwordmin');
                var maxLength = $el.data('maxlength');
                if(content.length < minLength || content.length > maxLength) {
                    return true;
                } else {
                    var re = /([A-z\d\?\,\.\:\;\'\"\!\(\)])*[A-Z]/;
                    return re.test(content);
                }
            },
            'passwordtips': function($el) {
                return $el.val().length !== 1;
            },
            'passwordmin': function($el) {
                var length = $el.val().length;
                var minlength = $el.data('passwordmin');
                return (!$el.val()) || (length >= minlength) || (length === 1);
            },
            'phonenumber': function($el) {
                if ($el.val() === '') {
                    return true;
                }
                var value = Number($el.val());
                if (!value) {
                    return false;
                }
                if ($el.val() === '0' + value) {
                    return false;
                }
                var length = $el.val().length;
                var requiredLength = Number($el.data('requiredlength'));
                if (length !== requiredLength) {
                    return false;
                }
                var re = /^1\d/;
                return re.test(value);
            },
            'need': function($el) {
                return $el.val().trim().length > 0;
            }

        }
    };

    function ajaxReq(url, type, data) {
        return $.ajax({
            url: url,
            type: type,
            data: JSON.stringify(data),
            dataType: 'json',
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
    }

    // 注册提示
    (function() {

        $("#register-email").focus(function() {
            $('.register-mail-tip').show();
        });
        $("#register-email").blur(function() {
            if (!$('.register-mail-error').hasClass("has-error")) {
                $('.register-mail-tip').hide();
            }
        });

        $("#register-password").focus(function() {
            $('.register-password-tip').show();
        });
        $("#register-password").blur(function() {
            if (!$('.register-password-error').hasClass("has-error")) {
                $('.register-password-tip').hide();
            }
        });

        $("#register-company").blur(function() {
            if ($('.register-company-error').hasClass("has-error")) {
                $('.register-company-tip').show();
            } else {
                $('.register-company-tip').hide();
            }
        });

        $("#register-wechatQQ").blur(function() {
            if ($('.register-wechatQQ-error').hasClass("has-error")) {
                $('.register-wechatQQ-tip').show();
            } else {
                $('.register-wechatQQ-tip').hide();
            }
        });

        $("#register-phoneNumber").blur(function() {
            if ($('.register-phoneNumber-error').hasClass("has-error")) {
                $('.register-phoneNumber-tip').show();
            } else {
                $('.register-phoneNumber-tip').hide();
            }
        });

        $("#register-password-confirm").blur(function() {
            if ($('.register-password-confirm-error').hasClass("has-error")) {
                $('.register-password-confirm-tip').show();
            } else {
                $('.register-password-confirm-tip').hide();
            }
        });
    })();
    
    // 注册
    $('.registerForm').validator(options).on('submit', function(e){

        var registerEmail = $('#register-email').val();
        var registerPassword = $('#register-password').val();
        var phoneNumber = $('#register-phoneNumber').val();
        phoneNumber = (phoneNumber !== '') ? phoneNumber: null;

        var registerPostData = {
            email: registerEmail,
            password: registerPassword,
            company: $('#register-company').val(),
            wechat_qq: $('#register-wechatQQ').val(),
            phone_number: $('#register-phoneNumber').val()
        };

        var regitsterUrl = CONFIG.urls.baseUrl + CONFIG.urls.registerUrl;
        
        if(!e.isDefaultPrevented()) {
            e.preventDefault();
            register(regitsterUrl, registerPostData);
        }
    });

    function register(url, postData) {
        ajaxReq(url, 'post', postData).success(function(data) {
            if (data && data.code === 0) {
                var modalChangeData = {
                    hideDom: '#register',
                    showDom: '#relative-success',
                    tipDom: '.success-tips',
                    tipText:  '请登录您的邮箱激活账号'
                };
                var textMailData = {
                    text: '登录邮箱',
                    mail: postData.email,
                    dom: '#relative-success'
                };
                changeModal(modalChangeData);
                textMailJump('.success-click-button', textMailData, goToMailBox);
            } else if (data && data.code === 1) {
                var error = dataError(data);
                $('.register-code-tip').show();
                $('.register-mail-error').addClass('has-error');
                $('#register-code-error').text(error);

                $("#register-email").focus(function () {
                    $('.register-code-tip').hide();
                    $('.register-mail-error').removeClass('has-error');
                });

            }
        }).error(function(resp) {
            if (resp.responseJSON && resp.responseJSON.code === 1) {
                var error = dataError(resp.responseJSON);
                $('.register-code-tip').show();
                $('.register-mail-error').addClass('has-error');
                $('#register-code-error').text(error);

                $("#register-email").focus(function (argument) {
                    $('.register-code-tip').hide();
                    $('.register-mail-error').removeClass('has-error');
                });
            } else {
                $('#register').modal('hide');
                $('#error-modal').modal('show');
            }
        });
    }

    //登录提示
    (function() {
        $('#login-email').blur(function() {
            if ($('.login-error').hasClass('has-error')) {
                $('.login-tip').show();
            } else {
                $('.login-tip').hide();
            }
        });

        $('#login-password').blur(function () {
            if ($('.password-input').hasClass('has-error')) {
                $('.login-password-tip').show();
            } else {
                $('.login-password-tip').hide();
            }
        });
    })();

    //登录
    $('.loginForm').validator(options).on('submit', function(e) {
        var loginEmail = $('#login-email').val();
        var loginPassword = $('#login-password').val();
        var loginPostData = {
            email: loginEmail,
            password: loginPassword
        };
        var url = CONFIG.urls.baseUrl + CONFIG.urls.loginUrl;

        if(e.isDefaultPrevented()) {
            
        } else {
            e.preventDefault();
            login(url, loginPostData);
        }
    });

    function login(url, postData) {
        ajaxReq(url, 'post', postData).success(function(data) {

            if (data && data.code === 0) {
                docCookies.setItem('token', '\"' + data.data.token + '\"', undefined, '/', CONFIG.urls.domainUrl, undefined);
                window.location.href = CONFIG.urls.redirectUrl;
            } 
        }).error(function(resp) {
            if (resp.responseJSON && resp.responseJSON.code === 5) {
                var modalChangeData = {
                    hideDom: '#login',
                    showDom: '#not-yet-active'
                };
                var textMailData = {
                    mail: postData.email,
                    dom: '#not-yet-active'
                };
                changeModal(modalChangeData);
                textMailJump('.active-button', textMailData, goToMailBox);

                var sendActiveMailUrl = CONFIG.urls.baseUrl + CONFIG.urls.activeMailUrl;
                var sendActiveMailPostData = {
                    email: postData.email
                };

                //重新发送激活邮件
                $('.send-mail-again').on('click',function(e) {
                    e.preventDefault();
                    ajaxReq(sendActiveMailUrl, 'post', sendActiveMailPostData).success(function(data) {
                        if (data && data.code === 0) {
                            var modalChangeData = {
                                hideDom: '#not-yet-active',
                                showDom: '#relative-success',
                                tipDom: '.success-tips',
                                tipText:  '发送成功！'
                            };
                            var textMailData = {
                                text: '登录邮箱',
                                mail: postData.email,
                                dom: '#relative-success'
                            };
                            changeModal(modalChangeData);
                            textMailJump('.success-click-button', textMailData, goToMailBox);
                        } else if (data && data.code === 1) {
                            $('#send-active-mail-error').text(dataError(data));
                        }
                    }).error(function(resp) {
                        if (resp.responseJSON && resp.responseJSON.code === 1) {
                            $('#send-active-mail-error').text(dataError(resp.responseJSON));
                        } else {
                            $('#not-yet-active').modal('hide');
                            $('#error-modal').modal('show');
                        }
                    });
                });
            } else if (resp.responseJSON && resp.responseJSON.code === 1) {
                var error = '用户名或密码错误';
                $('#login-code-text').text(error);
                $('.login-error').addClass('has-error');
                $('.login-code-tip').show();

                $("#login-email").focus(function () {
                    $('.login-code-tip').hide();
                    $('.login-error').removeClass('has-error');
                });
            } else {
                $('#login').modal('hide');
                $('#error-modal').modal('show');
            }
        })
    }

    //忘记密码-填写邮箱提示
    (function () {
        $('#reset-mail-address').blur(function() {
            if($('.reset-mail-error').hasClass('has-error')) {
                $('.reset-mail-tip').show();
            } else {
                $('.reset-mail-tip').hide();
            }
        });
    })();

    //忘记密码
    $('.resetMailForm').validator(options).on('submit', function(e) {
        var email = $('#reset-mail-address').val();
        var postData = {
            email: email
        };
        var url = CONFIG.urls.baseUrl + CONFIG.urls.resetPasswordUrl;

        if(e.isDefaultPrevented()) {

            // $('#reset-mail-error').text('请填写注册用户邮箱地址');
        } else {
            e.preventDefault();
            resetMail(url, postData);
        }
    });

    function resetMail(url, postData) {
        ajaxReq(url, 'post', postData).success(function(data) {
            if (data && data.code === 0) {
                var modalChangeData = {
                    hideDom: '#reset-mail',
                    showDom: '#reset-tips',
                    tipDom: '.text-success',
                    tipText:  postData.email
                };
                var textMailData = {
                    text: '登录邮箱',
                    mail: postData.email,
                    dom: '#reset-tips'
                }
                changeModal(modalChangeData);
                textMailJump('.go-to-mailbox', textMailData, goToMailBox);    
            } else if(data && data.code === 1) {

                var error = dataError(data);
                $('.reset-mail-error').addClass('has-error');
                $('.reset-mail-code-text').text(error);
                $('.reset-mail-code-tip').show();

                $('#reset-mail-address').focus(function() {
                    $('.reset-mail-error').removeClass('has-error');
                    $('.reset-mail-code-tip').hide();
                });
            }
        }).error(function(resp) {
            if(resp.responseJSON && resp.responseJSON.code === 1) {
                var error = dataError(resp.responseJSON);
                $('.reset-mail-error').addClass('has-error');
                $('.reset-mail-code-text').text(error);
                $('.reset-mail-code-tip').show();

                $('#reset-mail-address').focus(function() {
                    $('.reset-mail-error').removeClass('has-error');
                    $('.reset-mail-code-tip').hide();
                });
            } else {
                $('#reset-mail').modal('hide');
                $('#error-modal').modal('show');
            }
        });
    }

    //忘记密码-输入新密码提示
    (function() {
        $('#new-password').focus(function() {
            $('.reset-password-tip').show();
        });

        $("#new-password").blur(function() {
            if (!$('.reset-password-error').hasClass("has-error")) {
                $('.reset-password-tip').hide();
            }
        });

        $("#new-password-compare").blur(function() {
            if($('.reset-password-compare-error').hasClass("has-error")) {
                $('.reset-password-compare-tip').show();
            } else {
                $('.reset-password-compare-tip').hide();
            }
        });
    })();


    $('.resetPasswordForm').validator(options).on('submit', function(e) {
        var newPassword = $('#new-password').val();
        var newPasswordCompare = $('#new-password-compare').val();
        var postData = {
            'new_password': newPassword,
            'new_password_compare': newPasswordCompare
        };
        var url = CONFIG.urls.baseUrl + CONFIG.urls.verifyMailAddress;
        var resetCode = '$reset_code';
        url = url.replace(resetCode, verifyCode);

        if(e.isDefaultPrevented()) {
            if(newPassword === '' || newPasswordCompare === '') {
                $('#reset-password-error').text('请输入密码');
            }
        } else {
            e.preventDefault();
            resetPassword(url, postData)
        }
    });

    function resetPassword(url, postData) {
        ajaxReq(url, 'put', postData).success(function(data) {
            if (data && data.code === 0) {
                var modalChangeData = {
                    hideDom: '#reset-password',
                    showDom: '#relative-success',
                    tipDom: '.success-tips',
                    tipText:  '密码重置成功！'
                };
                changeModal(modalChangeData);
                $('.success-click-button').text('立即登录数人云');
            } else if(data && data.code === 1){
                var error = dataError(data);
                $('.reset-password-code-tip').text(error);
                $('.reset-password-error').addClass('has-error');
                $('.reset-password-code').show();

                $("#new-password").focus(function () {
                    $('.reset-password-code').hide();
                    $('.reset-password-error').removeClass('has-error');
                });

            }
        }).error(function(resp) {
            if (resp.responseJSON && resp.responseJSON.code === 1) {
                var error = dataError(resp.responseJSON);
                $('.reset-password-code-tip').text(error);
                $('.reset-password-error').addClass('has-error');
                $('.reset-password-code').show();

                $("#new-password").focus(function () {
                    $('.reset-password-code').hide();
                    $('.reset-password-error').removeClass('has-error');
                });
            } else {
                $('#reset-password').modal('hide');
                $('#error-modal').modal('show');
            }
        });   
    }

    // modal跳转
    function changeModal(data) {
        $(data.hideDom).modal('hide');
        $(data.showDom).modal('show');
        $(data.tipDom).text(data.tipText);
    }

    //添加button文字并跳转至邮箱
    function textMailJump(button, data, callback) {
        $(button).text(data.text).on('click', function(e) {
            e.preventDefault();
            callback(data.mail, data.dom);
        });
    }

    //跳转至邮箱
    function goToMailBox(mailAddress, dom) {
        var location = getMailServiceLink(mailAddress);
        if (location) {
            window.location.href = location;
        } else {
            $(dom).modal('hide');
        }
    }

    function getMailServiceLink(address) {
        var mailHash = {
            'gmail.com': 'https://mail.google.com',
            'yahoo.com': 'https://login.yahoo.com/',
            'qq.com': 'https://mail.qq.com/',
            'sina.com': 'http://mail.sina.com.cn/',
            '21cn.com': 'http://mail.21cn.com/',
            'sohu.com': 'http://mail.sohu.com/',
            'aol.com': 'http://mail.aol.com/',
            '163.com': 'http://mail.163.com/',
            '126.com': 'http://mail.126.com/',
            'yeah.net': 'http://www.yeah.net/',
            'dataman-inc.com': 'http://exmail.qq.com/login'
        };
        var service = address.split('@')[1];
        return mailHash[service];
    }

    function dataError(data) {
        if (data && data.errors) {
            for (var error in data.errors) {
                return data.errors[error];
            }
        }
    }

    function interfaceError(dom) {
        $(dom).text('服务器忙，请稍后再试。');
    }

    function getQueryResult(url) {
        var details = {
            verify: {
                key: 'code',
                replaceWord: '$reset_code',
                url: 'verifyMailAddress',
                method: 'get',
                dom: '#reset-password',
                errorDom: '#reset-password-error'
            },
            active: {
                key: 'active',
                replaceWord: '$active_code',
                url: 'activeUrl',
                method: 'put',
                dom: '#relative-success',
                errorDom: '#active-success-error'
            }
        };
        if(url.indexOf('=') > -1) {
            var code;
            var objKey;
            var key;
            for (objKey in details) {
                key = details[objKey].key;
                if (url.indexOf(key) > -1) {
                    details[objKey].code = url.split('=')[1];
                    return details[objKey];
                }
            }
        }
    }

    (function confirm(){
        var result = getQueryResult(location.search);
        if(result) {
            var url = CONFIG.urls.baseUrl + CONFIG.urls[result.url];
            url = url.replace(result.replaceWord, result.code);
            verifyCode = result.code;

            ajaxReq(url, result.method).success(function(data) {
                if(data && data.code === 0) {
                    $(result.dom).modal('show');
                    if (result.key === 'active') {
                        $('.success-tips').text('激活成功');
                        $('.success-click-button').text('立即登录数人云');
                    }
                } else if (data && data.code === 1){
                    $('#relative-error').modal('show');
                    $('.text-danger').text(dataError(data));
                    $('.error-click-button').hide();
                }
            }).error(function(resp) {
                if (resp.responseJSON && resp.responseJSON.code === 1){
                    $('#relative-error').modal('show');
                    $('.text-danger').text(dataError(resp.responseJSON));
                    $('.error-click-button').hide();
                } else {
                    //tips
                    $('#error-modal').modal('show');
                }
            });
        }
    })();

    (function() {
        if (window.location.search === '?register=true') {
            $('#register').modal('show');
        }
    })();

    $('a[data-toggle=popover]').popover().click(function(e) {
        e.preventDefault();
    });

    (function fetchVersions() {
      $.each(CONFIG.urls.versionUrl, function(key, value) {
        $.get(CONFIG.urls._versionBaseUrl + CONFIG.environment + "-" + value, function(data) {
          v = $("#omegaVersion").attr('title');
          $("#omegaVersion").attr('title', v.replace(key, value + ':' + data));
          if (key === 'frontend') {
            $("#omegaVersion").html(data);
          }
        });
      });
    })();
});
