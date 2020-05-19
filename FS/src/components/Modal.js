import React, {Component} from "react";
import axios from 'axios'
import {API} from "../constants/api";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'db_newx',
            username: 'gennadysx',
            password: 'password'
        }
    }

    createSite = (e) => {
        e.preventDefault()
        axios.post(API.api + '/project', this.state).then(res => (res.data && res.data.id) ?
            window.location.reload()
            : alert('Ошибка систем'));
    }



    render() {
        return (
            <>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <h4 className="custom-modal-title">Новый сайт</h4>
                            <div className="custom-modal-text text-left">
                                <form role="form">
                                    <div className="form-group">
                                        <label htmlFor="name">Название сайта</label>
                                        <input type="text" className="form-control"
                                               id="name"
                                               placeholder="ex: domain.com"
                                               value={this.state.name}
                                               onChange={(val)=> this.setState({name: val.target.value})}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Логин</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="ex: /home/django/"
                                               value={this.state.username}
                                               onChange={(val)=> this.setState({username: val.target.value})}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="position">Пароль</label>
                                        <input type="password"
                                               className="form-control" id="position"
                                               placeholder="ex: 8000"
                                               value={this.state.password}
                                               onChange={(val)=> this.setState({password: val.target.value})}/>
                                    </div>
                                    <button type="button" className="btn btn-default waves-effect waves-light" onClick={(e) => this.createSite(e)}>Создать
                                    </button>
                                    <button type="button" className="btn btn-danger waves-effect waves-light m-l-10"
                                            data-dismiss="modal">Отмена
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Modal;
